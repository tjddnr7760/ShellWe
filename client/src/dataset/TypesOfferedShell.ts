// hooks
export interface RequestBodyForAccept {
  myShellId: number;
  sellerShellId: number;
  sellerMemberId: number;
}

export interface ApiResponseOfAcceptShell {
  redirectUrl: string;
}

export interface GetMyShellsArgs {
  (memberId?: number, method?: string, isHeader?: boolean): Promise<any>;
}

export interface GetPokedShellIdArgs {
  (shellId: number): Promise<any>;
}

// pictures
export interface clickedShellPicturesProps {
  clickedShellPictures: Pictures[];
}

export interface Pictures {
  order: number;
  url: string;
}

export interface PictureProps {
  picture: Pictures;
}

// offered shells
export interface OfferedShells {
  id: number;
  type: string;
  status: string;
  title: string;
  body?: string;
  createdAt: string;
  category: string;
  pictures?: Pictures[];
  member: {
    id: number;
    displayName: string;
    profileUrl: string;
  };
}

// poked shells
export interface MyPokedShellDataProps {
  myPokedShellsData: PokedShellsList;
  HandleClickPokedShell: (shellId: number) => void;
  clickedShellId: number | undefined;
}
export interface ClickedShellId {
  clickedShellId: number | undefined;
}

export interface PokedShellsList {
  shells: PokedShells[];
}

export interface PokedShells {
  id: number;
  type: string;
  status: string;
  title: string;
  createdAt: string;
  category: string;
  picture: string;
  member: {
    id: number;
    displayName: string;
    profileUrl: string;
  };
}

export interface HandleClickPokedShellProps {
  HandleClickPokedShell: (shellId: number) => void;
}
