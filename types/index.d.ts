declare interface PortItemData {
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
}
