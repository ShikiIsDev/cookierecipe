"use client"
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"


import { useRef} from "react";

export default function Home() {

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playAudio = async () => {
    try {
      if (audioRef.current) {
        await audioRef.current.play();
      }
    } catch (error) {
      console.error("Failed to play audio:", error);
    }
  };


  return (
    <div className="pattern4">
      <center>
      <div className="max-w-sm rounded overflow-hidden shadow-lg" onClick={playAudio}>
      <div className="w-full">
        <Image src="/cookiemonster.jpg" alt="cookie monster" width="200" height="200" />
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">
          Welcome  to my cookie recipe website. Click the tabs to see recipe
        </p>
        <p>Press me for a surprise</p>
      </div>
    </div>
    </center>
      <Tabs>
        <TabsList className="absolute top-0 right-0 p-4">
          <TabsTrigger value="Chocolate Chip">Chocolate Chip</TabsTrigger>
          <TabsTrigger value="Peanut Butter Cookies">Peanut Butter Cookies</TabsTrigger>
          <TabsTrigger value="Oatmeal Raisin Cookies">Oatmeal Raisin Cookies</TabsTrigger>
        </TabsList>
        <TabsContent value="Chocolate Chip" className="p-4">
          <Card className="pattern1">
            <CardHeader>
              <CardTitle>Chocolate Chip Cookies</CardTitle>
              <CardDescription>Delicious chocolate chip cookies.</CardDescription>
            </CardHeader>
            <CardContent>
            <Image src="/chocolate-chip.jpg" alt="Chocolate Chip Cookies" width="200" height="200" />
            </CardContent>
            <CardContent>
              <p className="font-bold">Ingredients</p>
              <ul>
                <li>1 cup unsalted butter, softened</li>
                <li>1 cup granulated sugar</li>
                <li>1 cup packed brown sugar</li>
                <li>2 large eggs</li>
                <li>2 teaspoons vanilla extract</li>
                <li>3 cups all-purpose flour</li>
                <li>1 teaspoon baking soda</li>
                <li>1/2 teaspoon baking powder</li>
                <li>1 teaspoon salt</li>
                <li>2 cups semi-sweet chocolate chips</li>
              </ul>
              <br></br>
              <p className="font-bold">Instructions</p>
              <ol>
                <li>1. Preheat your oven to 350°F (175°C).</li>
                <li>2. In a large bowl, cream together the butter, 
                  granulated sugar, and brown sugar until smooth.</li>
                <li>3. Beat in the eggs one at a time, then stir in the vanilla.</li>
                <li>4. Dissolve the baking soda in hot water 
                  and add to the batter along with the salt.</li>
                <li>5. Gradually blend in the flour.</li>
                <li>6. Fold in the chocolate chips.</li>
                <li>7. Drop by large spoonfuls onto ungreased pans.</li>
                <li>8. Bake for about 10 minutes in the preheated oven, 
                  or until edges are nicely browned.</li>
              </ol>
            </CardContent>
            <CardFooter>
              <p>Enjoy with a glass of milk!</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Peanut Butter Cookies" className="p-4">
          <Card className="pattern2">
            <CardHeader>
              <CardTitle>Peanut Butter Cookies</CardTitle>
              <CardDescription>Tasty peanut butter cookies.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="/peanut-butter.jpg" alt="Peanut Butter Cookies" width="200" height="200" />
            </CardContent>
            <CardContent>
            <p className="font-bold">Ingredients</p>
            <ul>
              <li>1/2 cup unsalted butter, softened</li>
              <li>1/2 cup peanut butter (creamy or crunchy)</li>
              <li>1/2 cup granulated sugar</li>
              <li>1/2 cup packed brown sugar</li>
              <li>1 large egg</li>
              <li>1 teaspoon vanilla extract</li>
              <li>1 1/4 cups all-purpose flour</li>
              <li>1/2 teaspoon baking powder</li>
              <li>1/2 teaspoon baking soda</li>
              <li>1/4 teaspoon salt</li>
            </ul>
            <br></br>
            <p className="font-bold">Instructions</p>
            <ol>
              <li>1. Preheat your oven to 350°F (175°C).</li>
              <li>2. In a large bowl, cream together the butter, peanut butter, 
                granulated sugar, and brown sugar until smooth.</li>
              <li>3. Beat in the egg and vanilla extract until well combined.</li>
              <li>4. In a separate bowl, whisk together the flour, baking powder, 
                baking soda, and salt.</li>
              <li>5. Gradually blend the dry ingredients into the wet ingredients until a soft dough forms.</li>
              <li>6. Roll the dough into 1-inch balls and place them onto ungreased baking sheets.</li>
              <li>7. Flatten each ball with a fork, making a criss-cross pattern.</li>
              <li>8. Bake for 10-12 minutes, or until edges are lightly browned.</li>
              <li>9. Allow the cookies to cool on the baking sheet for 5 minutes 
                before transferring to a wire rack to cool completely.</li>
            </ol>
          </CardContent>
            <CardFooter>
              <p>Perfect for peanut butter lovers.</p>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="Oatmeal Raisin Cookies" className="p-4">
          <Card className="pattern3">
            <CardHeader>
              <CardTitle>Oatmeal Raisin Cookies</CardTitle>
              <CardDescription>Healthy oatmeal raisin cookies.</CardDescription>
            </CardHeader>
            <CardContent>
              <Image src="/oatmeal-raisin.jpg" alt="Oatmeal Raisin Cookies" width="200" height="200" />
            </CardContent>
            <CardContent>
            <p className="font-bold">Ingredients</p>
            <ul>
              <li>1/2 cup unsalted butter, softened</li>
              <li>3/4 cup granulated sugar</li>
              <li>3/4 cup packed brown sugar</li>
              <li>2 large eggs</li>
              <li>1 teaspoon vanilla extract</li>
              <li>1 1/2 cups all-purpose flour</li>
              <li>1 teaspoon baking soda</li>
              <li>1/2 teaspoon salt</li>
              <li>1 teaspoon ground cinnamon</li>
              <li>3 cups old-fashioned oats</li>
              <li>1 cup raisins</li>
            </ul>
            <br></br>
            <p className="font-bold">Instructions</p>
            <ol>
              <li>1. Preheat your oven to 350°F (175°C).</li>
              <li>2. In a large bowl, cream together the butter, granulated sugar, 
                and brown sugar until smooth.</li>
              <li>3. Beat in the eggs one at a time, then stir in the vanilla extract.</li>
              <li>4. In a separate bowl, whisk together the flour, baking soda, salt, and cinnamon.</li>
              <li>5. Gradually blend the dry ingredients into the wet ingredients.</li>
              <li>6. Stir in the oats and raisins until well combined.</li>
              <li>7. Drop by rounded spoonfuls onto ungreased baking sheets.</li>
              <li>8. Bake for 10-12 minutes, or until the edges are golden brown.</li>
              <li>9. Allow the cookies to cool on the baking sheet for 5 minutes before transferring to a wire rack to cool completely.</li>
            </ol>
          </CardContent>

            <CardFooter>
              <p>A great snack for any time of the day.</p>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
      <audio ref={audioRef} src="/cookiesong.mp3" preload="auto" />
    </div>
  );
}
