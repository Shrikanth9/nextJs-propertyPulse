'use client'

import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton, EmailShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon, EmailIcon
} from "react-share";


const ShareButton = ( { property }: { property: any }) => {
    const shareUrl = `${process.env.NEXT_PUBLIC_DOMAIN}/properties/${property._id}`
    return ( 
        <>
           <h3 className="text-xl font-bold text-center pt-2"> Share This property : </h3>
            <div className="flex justify-center gap-3">
                <FacebookShareButton url={shareUrl} title={property.name} hashtag={`#${property.type.replace(/\s/g, '')}ForRent`}>
                    <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} hashtags={[`${property.type.replace(/\s/g, '')}ForRent`]}>
                    <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
                <WhatsappShareButton url={shareUrl} title={property.name} separator='::'>
                    <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>
                <EmailShareButton url={shareUrl} subject={property.name} body={`Check out this property:`}>
                    <EmailIcon size={32} round={true} />
                </EmailShareButton>

            </div>
        </>
     );
}
 
export default ShareButton;