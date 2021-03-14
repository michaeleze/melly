import {HomeContent} from "../../../lib/constants";

export default async function handler(req, res) {
   res.status(200).json({
    src: HomeContent.src,
    header: HomeContent.text,
  })
  res.end();
}
