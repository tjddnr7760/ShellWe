export interface MyShellDataProps {
  shells: Shells[];
}
export interface Shells {
  id: number;
  category: string;
  createdAt: string;
  picture: string;
  status: string;
  title: string;
  type: string;
  member: Member;
  tags: Tags[];
}
export interface Member {
  id: number;
  displayName: string;
  profileUrl: string;
}

export interface Tags {
  tagName: string;
}

// Profile.tsx
export interface MyShellsProfileProps {
  showTags?: boolean;
  // data: MyShellDataProps;
}
// AllTags.tsx
export interface MyShellsProfileProps {
  data: MyShellDataProps;
}
