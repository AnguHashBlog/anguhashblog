export interface AppFeature {
  name: string;
  description: string;
  app: App[];
}

export interface App {
  name: string;
  status: string;
  issueLink?: string;
}
