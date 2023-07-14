// MyShellList, MyShell of OfferModal
export interface MyShellsDataProps {
  myShellListsData: MyShells[];
}

export interface MyShells {
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

// ShellDetail
export interface ShellDetailProps {
  handlePoke: () => void; // Define the handlePoke prop
  handleOpenSidebar: () => void;
  shellDetailData: ShellDetailDataProps;
}

export interface ShellDetailDataProps {
  id: number;
  type: string;
  title: string;
  pictures: Picture[];
  body: string;
  category: string;
  createdAt: string;
  member: Member;
  modifiedAt: string;
  status: string;
  tags: Tag[];
}

export interface Picture {
  order: number;
  url: string;
}

export interface Tag {
  tagName: string;
}

export interface Member {
  id: number;
  displayName: string;
  profileUrl: string;
}

export interface BodyProps {
  category: string;
  body: string;
}

export interface ShellStatus {
  status: string;
}
