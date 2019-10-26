export interface IDayPicture {
  date: string;
  explanation: string;
  url: string;
  title: string;
  copyright?: string;
}

export interface INoPicture {
  code: number;
  msg: string;
}

export function isDayPicture(dayPicture: IDayPicture | INoPicture): dayPicture is IDayPicture {
  return !!(dayPicture as IDayPicture).date;
}
