export interface AppEnvironment {
  weatherApi: {
    url: string,
    key: string
  }
}

export class AppEnvironment implements AppEnvironment {}
