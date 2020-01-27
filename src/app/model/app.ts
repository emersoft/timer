export interface ActionData {
  chapterId: string;
  userId: string;
  type: string;
}

export interface App {
  start(): void;
  stop(payload: ActionData): void;
}
