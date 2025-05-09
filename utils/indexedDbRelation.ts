// 必要であればアップグレード処理を行う
export const indexedDbPreparation = async () => {
	return new Promise<void>((resolve, reject) => {
		const upgradeRequest = indexedDB.open("cmd-like-idle-db", 1);

		upgradeRequest.onupgradeneeded = (e) => {
			const db = upgradeRequest.result;

			if (e.oldVersion < 1) {
				db.createObjectStore("save-data");
				db.createObjectStore("before-play-data-id");
			}

			db.onversionchange = () => {
				db.close();
			};
		};

		upgradeRequest.onsuccess = () => {
			console.log("success");
			resolve();
		};

		upgradeRequest.onerror = (e) => {
			reject(e);
		};
	});
};

export const putBeforePlayDataId = async (id: string) => {
	return new Promise<void>((resolve, reject) => {
		const request = indexedDB.open("cmd-like-idle-db");

		request.onsuccess = () => {
			const db = request.result;
			const trans = db.transaction("before-play-data-id", "readwrite");
			const store = trans.objectStore("before-play-data-id");
			const dataRequest = store.put(id, "beforeId");

			dataRequest.onsuccess = () => {
				resolve();
			};

			dataRequest.onerror = (e) => {
				reject(e);
			};

			trans.oncomplete = () => {
				db.close();
			};
		};

		request.onerror = (e) => {
			reject(e);
		};
	});
};

export const getBeforePlayDataId = async () => {
	return new Promise<string>((resolve, reject) => {
		const request = indexedDB.open("cmd-like-idle-db");

		request.onsuccess = () => {
			const db = request.result;
			const trans = db.transaction("before-play-data-id", "readonly");
			const store = trans.objectStore("before-play-data-id");
			const countRequest = store.count();

			countRequest.onsuccess = () => {
				if (countRequest.result <= 0) {
					const id = "firstData";
					putBeforePlayDataId(id);
					return resolve(id);
				}

				const dataRequest = store.get("beforeId");

				dataRequest.onsuccess = () => {
					resolve(dataRequest.result);
				};

				dataRequest.onerror = (e) => {
					reject();
				};
			};

			trans.oncomplete = () => {
				db.close();
			};
		};

		request.onerror = (e) => {
			reject(e);
		};
	});
};

export const storeSaveData = async (data: SaveData, id: string) => {
	return new Promise<void>((resolve, reject) => {
		const request = indexedDB.open("cmd-like-idle-db");

		request.onsuccess = () => {
			const db = request.result;
			const trans = db.transaction("save-data", "readwrite");
			const store = trans.objectStore("save-data");
			const dataRequest = store.put(data, id);

			dataRequest.onsuccess = () => {
				resolve();
			};

			dataRequest.onerror = (e) => {
				reject();
			};

			trans.oncomplete = () => {
				db.close();
			};
		};

		request.onerror = (e) => {
			reject(e);
		};
	});
};

export const getSaveData = async (id: string) => {
	return new Promise<void>((resolve, reject) => {
		const request = indexedDB.open("cmd-like-idle-db");

		request.onsuccess = () => {
			const db = request.result;
			const trans = db.transaction("save-data", "readwrite");
			const store = trans.objectStore("save-data");
			const dataRequest = store.get(id);

			dataRequest.onsuccess = () => {
				const data: SaveData = dataRequest.result;
				const userStatus = userStatusStore();
				const materialRateManager = materialRateManagerStore();

				// version
				if (data.fragments) {
					userStatus.fragments = data.fragments;
				}
				if (data.materials) {
					userStatus.materials = data.materials;
				}
				if (data.battleStatusLevels) {
					userStatus.battleStatusLevels = battleStatusLevelsWithDefault(data.battleStatusLevels);
				}
				if (data.rateOfMaterials) {
					materialRateManager.rate = data.rateOfMaterials;
				}
				if (data.progresses) {
					userStatus.progresses = progressesWithDefault(data.progresses);
				}

				resolve();
			};

			dataRequest.onerror = (e) => {
				reject(e);
			};
		};

		request.onerror = (e) => {
			reject(e);
		};
	});
};
