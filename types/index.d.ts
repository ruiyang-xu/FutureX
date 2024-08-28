declare interface PortItemData {
  id: number;
  logo: string;
  partner: string;
  year: string | number;
  type: number;
  blurb: string;

  dataDetail: PortDetail;
}
declare interface PortDetail {
  founder?: string;
  milestone: string;
  website: string;
  url?: string;
}

declare interface NetWordPhotoData {
  id: number;
  name: string;
  logo: string;
  logo2: string;
  founder: string;
  img: string;
  title: string;
  content: string[];
}

declare interface NetWordListItem {
  id: number;
  title: string;
  content: string;
  img: string;
}

declare interface TeamItem {
  id: number;
  img: string;
  pos: string;
  name: string;
  content: string[];
}

declare interface NewList {
  id: number;
  type: string;
  title: string;
  desc: string;
  date: string;
  img: string;
}
declare interface NewDetail {
  id: number;
  type: string;
  title: string;
  desc: string;
  date: string;
  img: string;
  detail: string;
}

declare interface VoiceNav {
  name: string;
  value: string;
}
