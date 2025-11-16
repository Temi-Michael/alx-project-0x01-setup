export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UserProps {
  id: number;
  name: string;
  username?: string;
  email?: string;
  // address: Address;
  phone?: string;
  website?: string;
  // company: Company;
}

export interface Address {
  street: string;
  suite?: string;
  city: string;
  zipcode?: string;
  // geo: Geo;
}

export interface Geo extends Address {
  lat?: string;
  lng?: string;
}

export interface Company extends Geo {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface UserData {
  userId: number;
  name: string;
  username: string;
  email: string;
  image: string;
}

export interface UserModalProps extends UserProps {
  onClose: () => void;
  onSubmit: (user: UserProps) => void;
}

export interface ButtonProps {
  text: string;
  onClick?: () => void;
}

export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}
