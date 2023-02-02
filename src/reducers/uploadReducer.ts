interface UploadState {
  fileList: File[];
}

export enum UploadActionType {
  UPLOAD = "UPLOAD",
}

interface UploadAction {
  type: UploadActionType;
  payload: File[];
}

export const uploadReducer = (state: UploadState, action: UploadAction) => {
  switch (action.type) {
    case UploadActionType.UPLOAD:
      return { ...state, fileList: state.fileList.concat(action.payload) };
    default:
      return state;
  }
};
