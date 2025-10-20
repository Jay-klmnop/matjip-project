export interface MatjipType {
  id: string;
  title: string;
  image: {
    src: string;
    alt: string;
  };
  description: string;
  lat: number;
  lon: number;
}
