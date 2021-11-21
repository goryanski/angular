export interface AppEnvironment {
  recipesApi: {
    url: string,
    key: string
  }
}

export class AppEnvironment implements AppEnvironment {}
