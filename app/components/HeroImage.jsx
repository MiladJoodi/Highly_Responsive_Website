import Image from "next/image";

const HeroImage = () => {

    const files = [
        {
            title: "IMG_4985.HEIC",
            size: "5.9 MB",
            source:
                "https://img.freepik.com/free-photo/close-up-portrait-nice-cute-adorable-smiling-charming-cheerful-girl-pointing-with-her-index-finger_176532-7923.jpg?t=st=1709059526~exp=1709063126~hmac=93d6e665b1b3accba89caece6d3ae55d5c783abd5326e98a5d6397282679d41b&w=996",
        },
        {
            title: "IMG_4985.HEIC",
            size: "3.9 MB",
            source:
                "https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement_176420-20189.jpg?t=st=1709059559~exp=1709063159~hmac=b7967b66d1969292118c490665a28f9474e202383cd49f80e5ac38c47f48f205&w=996",
        },
        {
            title: "IMG_4985.HEIC",
            size: "4.2 MB",
            source:
                "https://img.freepik.com/free-photo/young-beautiful-woman-casual-outfit-isolated-studio_1303-20526.jpg?t=st=1709059582~exp=1709063182~hmac=132fb863e11b052592dc1145a256beb029979fc3aa770c8db2bab9537cd6fe13&w=996",
        },
        {
            title: "IMG_4985.HEIC",
            size: "7 MB",
            source:
                "https://img.freepik.com/free-photo/dreamy-young-woman-sunglasses-looking-front_197531-16739.jpg?t=st=1709059611~exp=1709063211~hmac=15c91616c43a73bb5ba55db7770677cf7207c1fbad967f6e7514ee0e09482583&w=996",
        },
        {
            title: "IMG_4985.HEIC",
            size: "2.2 MB",
            source:
                "https://img.freepik.com/free-photo/brunette-smiling-woman-with-beauty-long-brown-hair-fashion-model-with-long-straight-hair-fashion-model-posing-pretty-woman-with-long-straight-brown-hair_186202-8456.jpg?t=st=1709059631~exp=1709063231~hmac=c4573788fee72b6f65f980f53195321e80f6ec18204c47752c19bd2ea485b318&w=826",
        },
        {
            title: "IMG_4985.HEIC",
            size: "6.95 MB",
            source:
                "https://img.freepik.com/free-photo/portrait-pretty-lady-red-warm-jacket-stylish-eyeglasses_197531-15046.jpg?t=st=1709059697~exp=1709063297~hmac=95e46b62faad8485f48bc8c75a7b8b16342377d425f1b8195175339b3e43a75a&w=996",
        },
        {
            title: "IMG_4985.HEIC",
            size: "3.7 MB",
            source:
                "https://img.freepik.com/free-photo/surprised-white-woman-striped-pants-sitting-purple-wall-with-mouth-open-indoor-photo-amazed-curly-girl-fur-jacket-posing-chair_197531-5164.jpg?t=st=1709059711~exp=1709063311~hmac=f6176a0930ad7fa09e16af0ed1479101c404e51c2e3b8f94b8203d302b330c02&w=996",
        },
        {
            title: "IMG_4985.HEIC",
            size: "1.8 MB",
            source:
                "https://img.freepik.com/free-photo/plain-shirt-model-wallpaper_1409-6310.jpg?t=st=1709059717~exp=1709063317~hmac=fa027d8725eb4c2279d07ae4844102d89aa5d79fe4891b05871b33d52d122bea&w=996",
        },
        {
            title: "IMG_4985.HEIC",
            size: "4.6 MB",
            source:
                "https://img.freepik.com/free-photo/excited-young-woman-showing-banner-pointing-fingers-left-smiling-camera-standing-amazed-white-wall_176420-37497.jpg?t=st=1709059726~exp=1709063326~hmac=658d09c511b5d41320c9948f0f2fe653f260a8f50a28839925d76867ab4f189b&w=996",
        },
        {
            title: "IMG_4985.HEIC",
            size: "2.4 MB",
            source:
                "https://img.freepik.com/free-photo/portrait-handsome-smiling-stylish-young-man-model-dressed-jeans-clothes-fashion-man_158538-5030.jpg?t=st=1709059767~exp=1709063367~hmac=a0c42e949e55c1fd28b3f53adef9354e23e181c995bc960a342ef59fd81ad868&w=826",
        },
        {
            title: "IMG_4985.HEIC",
            size: "10 MB",
            source:
                "https://img.freepik.com/free-photo/beautiful-woman-street_23-2147654273.jpg?t=st=1709059777~exp=1709063377~hmac=d48d0ac982d89604d9f024618d40d27dced5eb8b22da7746cb39b0b204715a01&w=996",
        },
        {
            title: "IMG_4985.HEIC",
            size: "6.5 MB",
            source:
                "https://img.freepik.com/free-photo/magnificent-young-woman-green-dress-looking-away-studio-shot-dreamy-girl-isolated-yellow-background_197531-27352.jpg?t=st=1709059796~exp=1709063396~hmac=ba3b8856d142bcfbd7ca1a340dbf8dc735a111b43f4f15fae8c37ad0e1100f3e&w=996",
        },
    ];

    return (
        <div className="max-w-screen-xl mx-auto py-10 px-4">
            <ul role="list" className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                {files?.map((file) => (
                    <li key={file?.source} className="relative">
                        <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-teal-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                            <Image
                                src={file?.source}
                                width={500}
                                height={500}
                                alt="fileImage"
                                className="pointer-events-none object-cover group-hover:opacity-75"
                            />
                        </div>
                        <p className="mt-2 block truncate text-sm font-medium text-gray-900">{file?.title}</p>
                        <p className="block truncate text-sm font-medium text-gray-500">{file?.size}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HeroImage;