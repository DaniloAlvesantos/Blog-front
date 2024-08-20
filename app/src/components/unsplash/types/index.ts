export interface ResponseProps {
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
    thumb: string;
  };
  alt: string;
  color: string;
}

type Names = "background" | "htmlContent"

export type BodyFuncProps = {
  handleBodyState: (name:Names, value:string) => void;
}

export type UnsplashProps = BodyFuncProps & {
  inputVal: string;
}
