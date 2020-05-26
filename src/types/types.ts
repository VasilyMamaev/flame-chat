export type UserType = {
  fullName: string;
  isOnline: boolean;
  avatar: undefined | string;
};

export type MessageType = {
  text: string;
  isReaded: boolean;
  created_at: Date;
};
