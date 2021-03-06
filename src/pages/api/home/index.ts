import { HOME_CONTENT } from "../../../../lib/constants";

export default async function handler(req, res) {
    res.status(200).json({
        content: [
            {
                src: HOME_CONTENT.src,
                text: HOME_CONTENT.text,
                header: HOME_CONTENT.header,
            },
            {
                src: HOME_CONTENT.src,
                text: HOME_CONTENT.text,
                header: HOME_CONTENT.header,
            }
        ]
    })

    res.end();
}
