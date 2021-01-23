export interface User {
  id: number;
  email: string;
  roles: string[];
  password: string;
  nom: string;
  prenom: string;
  adresse?: string;
  portable?: string;
  site?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
  soundcloud?: string;
  spotify?: string;
  avatar?: string;
  couleur?: string;
  hasCompletedInformations: boolean;
}

export interface Credentials {
  username: string;
  password: string;
}

export interface TokenResponse {
  token: string;
}
