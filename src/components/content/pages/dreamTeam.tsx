import {friendsImages} from "../../../utils/images.ts";
import Friend from "./friend.tsx";

const DreamTeam = () => {
    return (
        <section className={'float-right w-1/2 row border rounded-b-3xl grid grid-cols-3 gap-1.5 mt-2 ml-2'}>
            <h2 className="text-center col-span-3 text-2xl">Dream team</h2>
            {
                friendsImages.map((img, index) =>
                    <Friend friend={img} pos={index} key={img}/>
                )
            }

        </section>
    );
};

export default DreamTeam;