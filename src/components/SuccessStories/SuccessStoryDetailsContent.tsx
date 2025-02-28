"use client";

import Image from "next/image";
import successStoryDetails from "/public/images/success-story-details.jpg"; 

const SuccessStoryDetailsContent = () => {
  return (
    <>
      <div className="py-[50px] md:py-[60px] lg:py-[80px] xl:py-[100px]">
        <div className="container mx-auto">
          <div className="grid items-center gap-[30px] grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
            <div className="space-y-6">
     
              <h2 className="text-black font-semibold text-[25px] md:text-[30px] lg:text-[32px] xl:text-[36px] leading-[1.2] mb-[15px] md:mb-[30px]">
                EnvyTheme
              </h2>

              <div className="space-y-2">
                <p className="text-black"><strong>Introduction:</strong></p>
                <p>
                In a world inundated with digital noise, Offline Ad Agency, a trailblazing marketing firm, dared to embrace the beauty of tangible connections. Armed with creativity and a relentless drive to stand out, they embarked on a journey that would redefine advertising success in the physical realm. This is the story of how Offline Ad Agency's unwavering commitment to innovation, old-school charm, and personalized strategies led them to the pinnacle of offline advertising excellence.
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-black"><strong>The Vision Takes Shape</strong></p>
                <p>Founded by a group of marketing enthusiasts, Offline Ad Agency set out to challenge the status quo of digital dominance. They believed that the tangible power of billboards, print media, and direct mail had an indelible impact on audiences that transcended the fleeting impressions of screens. With a vision to rekindle the essence of human connection, they embarked on their mission.</p>
              </div>

              <div className="space-y-2">
                <p className="text-black"><strong>Crafting Memories, Inspiring Results</strong></p>
                <p>Offline Ad Agency's commitment to crafting memorable experiences paid dividends. Their captivating billboards became landmarks, their print ads adorned coveted publications, and their direct mail campaigns sparked excitement in recipients' hearts. Brands began to witness tangible returns, witnessing not just engagement but lasting connections with their customers.</p> 
              </div>
 
            </div>

            <div className="lg:pl-[40px] xl:pl-[60px] 2xl:pl-[100px]">
              <Image
                src={successStoryDetails}
                alt="About"
                className="rounded-[20px] relative"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuccessStoryDetailsContent;
