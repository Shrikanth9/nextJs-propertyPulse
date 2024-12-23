'use client'

import Link from "next/link";
import Image from "next/image";
import deleteProperty from "@/app/actions/deleteProperty";
import { toast } from "react-toastify";

const ProfileProperties = ( { properties }: any) => {

    const handleDeleteProperty = async (propertyId: string) => {
        let confirm = window.confirm("Are you sure you want to delete this property?");
        if (confirm) {
            await deleteProperty(propertyId);
            toast.success("Property deleted successfully");
        }
    }
    return ( 
        <>
        { properties.length === 0 ? (
            <div className="text-2xl text-center mt-10"> No property listings to show </div>
        ) : (
            properties.map((property: any) => 
                (<div key={property._id} className="mb-10">
                    <Link href={'/properties/' + property._id}>
                      <Image
                        className="h-32 w-full rounded-md object-cover"
                        src={property.images[0]}
                        alt={property.name}
                        width="0"
                        height="0"
                        sizes="100vw"
                      />
                    </Link>
                    <div className="mt-2">
                      <p className="text-lg font-semibold">{property.name}</p>
                      <p className="text-gray-600">Address: {property.location.street}, {property.location.city}</p>
                    </div>
                    <div className="mt-2">
                      <Link
                        href={'/properties/' + property._id + '/edit'}
                        className="bg-blue-500 text-white px-3 py-3 rounded-md mr-2 hover:bg-blue-600"
                      >
                        Edit
                      </Link>
                      <button
                        className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
                        type="button"
                        onClick={() => handleDeleteProperty(property._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>)
            )
        )}
        </>
     );
}
 
export default ProfileProperties;