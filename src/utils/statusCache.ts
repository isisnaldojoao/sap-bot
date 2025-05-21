let lastStatus: boolean = true;

export function getLastStatus(): boolean {
  return lastStatus;
}

export function setStatus(status: boolean): void {
  lastStatus = status;
}
