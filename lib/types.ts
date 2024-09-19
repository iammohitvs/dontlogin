export type SignedURLResponse =
    | {
          failure: string;
          success?: undefined;
      }
    | {
          success: {
              url: string;
              fileName: string;
          };
          failure?: undefined;
      };

export type GetSignedURLParams = {
    fileType: string;
    fileSize: number;
    checksum: string;
};

export type getUrlResponse = {
    message: string;
    fileInfo: {
        url: string;
        fileName: string;
    };
};

export type createDbEntryBody = {
    fileName: string;
    fileLink: string;
};

export type dbEntryResponse = {
    code: string;
};

export type getFileLink = {
    message: string;
    fileLink?: string;
};
