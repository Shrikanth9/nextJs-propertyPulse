"use client";

import { useSession } from "next-auth/react";
import InfoBox from "./InfoBox";

const InfoBoxes = () => {
    const { data: session } = useSession();
    return ( 
        <section>
          <div className="container-xl lg:container m-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                <InfoBox 
                  heading="For Renters" 
                  backgroundColor="bg-gray-100" 
                  buttonInfo={{ 
                    text: "Browse Properties", 
                    link: "/properties", 
                    bgColor: "bg-black",
                    hoverColor: "bg-gray-700"
                  }}>  
                    Find your dream rental property. Bookmark properties and contact owners. 
                </InfoBox>

                {session && (
                  <InfoBox 
                   heading="For Property Owners" 
                   backgroundColor="bg-blue-100" 
                   buttonInfo={{ 
                    text: "Add Property", 
                    link: "properties/add", 
                    bgColor: "bg-blue-500",
                    hoverColor: "bg-blue-600"
                   }}>  
                    List your properties and reach potential tenants. Rent as an airbnb or long term. 
                  </InfoBox>)
                }
            </div>
          </div>
        </section>
     );
}
 
export default InfoBoxes;