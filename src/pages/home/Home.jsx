import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { getFavoriteTravelPlace } from '@/apis/request/travel';

const HomePage = () => {
  const [data, setData] = useState([]);
  const getFavoriteTravels = async () => {
    try {
      const res = await getFavoriteTravelPlace();
      const members = res.data;
      setData(members);
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getFavoriteTravels();
  }, []);
  return (
    <div>
      <h3>
        {data.map(d => (
          <div key={d.id}>{d.title}</div>
        ))}
      </h3>
      <h3>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
        sit amet consectetur adipisicing elit. Ut, nam dolores eum facilis vero
        error quam vitae, libero non placeat ratione a repudiandae dignissimos
        voluptate ipsum? Velit, harum repellat sapiente quis explicabo tempore
        odio aliquam a corporis? Consequuntur id ipsa excepturi numquam libero
        ullam culpa eveniet nam quos. Rerum reprehenderit officia, perferendis
        quo praesentium cum. Nostrum rerum labore assumenda enim, quisquam sunt
        beatae amet exercitationem culpa fuga ipsa dignissimos nihil velit
        tempora. Doloremque commodi molestiae quos, hic officia impedit soluta
        quasi vero illo aperiam autem sunt magni quaerat voluptates dolorum,
        quas a. Iure impedit magni sit! Dignissimos excepturi quod repellat
        dolorum? Ea, ab ipsam. Nam quis alias explicabo qui iste accusantium
        provident asperiores quibusdam quasi eaque deserunt magnam enim
        doloribus, dolor delectus nemo culpa! Officia distinctio blanditiis
        ullam at quaerat suscipit laboriosam, cumque alias veritatis esse
        obcaecati sequi corporis possimus architecto unde odit sed non similique
        error? Minus reprehenderit debitis, vitae quibusdam tempore corrupti
        doloremque aspernatur ipsam necessitatibus a quasi possimus, fugit sint
        excepturi assumenda eligendi repellendus. Eveniet provident nam placeat
        perferendis veritatis temporibus vitae qui suscipit, molestiae error
        odit et rerum facere iure ut dolore, quibusdam optio aliquid, vel quos
        tempora dolores sit deserunt? Consequuntur repellendus, fugiat ullam
        maxime fuga ratione omnis. Eius, dolores impedit. Magnam, ea vero.
        Voluptate excepturi modi aspernatur, quam corporis doloribus! Sit,
        delectus. Doloribus aspernatur ipsum odio nobis autem eius sint
        distinctio veritatis quis aliquam ea laboriosam necessitatibus iste,
        voluptatem eaque nihil expedita esse quod, ipsa facilis veniam culpa?
        Nesciunt consectetur hic placeat modi voluptatem nostrum voluptatum
        illum sit natus iste odit asperiores id explicabo maiores officia rerum
        velit earum at doloribus, distinctio suscipit. Aut consequuntur fuga
        sapiente nihil error cum, tenetur iure debitis? Facilis porro id omnis
        in iusto. Labore numquam odio sit dolor deleniti unde incidunt, veniam
        aspernatur aut atque ad hic consequuntur temporibus minima deserunt,
        minus cumque architecto reiciendis tempora magnam laborum? Sapiente
        veritatis adipisci dolores velit quidem a sint aspernatur tempora fuga
        temporibus perferendis distinctio vitae, eligendi suscipit ad vel
        provident nisi in reiciendis similique architecto. Quae quisquam modi
        neque quas, reprehenderit voluptatem doloremque labore asperiores libero
        explicabo enim. Commodi expedita aliquid culpa optio ex nemo eveniet?
        Sequi quaerat debitis, dolores soluta explicabo nobis sed magnam dicta
        fugiat, tempora assumenda error deserunt ab culpa quis labore!
        Reiciendis hic blanditiis maxime. Enim voluptatem quidem minus. Ipsa
        deleniti quod impedit, rem omnis accusamus? Sequi, nemo minus. Numquam
        itaque, quae nam soluta magni necessitatibus sint adipisci maiores
        blanditiis praesentium alias, magnam eaque voluptatem omnis labore a hic
        sunt minus consequuntur ipsum laborum deleniti amet natus! Cum modi
        eaque iure incidunt harum ut, doloribus corporis obcaecati, maxime
        pariatur unde explicabo recusandae quaerat odio. Minima iure repellat
        cupiditate necessitatibus ducimus aspernatur ad provident, illum
        eligendi? Laboriosam sed laborum maxime, hic, et facilis soluta impedit
        maiores quibusdam eaque minima tenetur perspiciatis a qui, ad officia
        minus totam repellendus voluptas quod? Accusantium similique ex
        quisquam, dolor reprehenderit magnam quam expedita aut quo, totam id
        vero mollitia ratione vitae quod unde laboriosam veniam architecto est.
        Voluptatum maiores, possimus debitis quis ea fugiat in, dolores quas quo
        dolor velit odio eius iure enim tempora, ipsam fuga! Vitae quae rem nisi
        corrupti cum itaque nulla, consequuntur iure accusantium dolorum ad
        cumque in maiores incidunt! Doloribus dicta doloremque odio. Quo officia
        delectus facere eveniet, rerum eum necessitatibus libero non, fuga
        possimus nesciunt tempore, recusandae perferendis doloremque incidunt?
        Numquam in quasi vel eum id. Ipsa quaerat eum eveniet! Pariatur placeat
        amet fuga ducimus beatae vitae ratione explicabo repellat ad velit
        voluptate in, recusandae assumenda. Nesciunt quisquam recusandae nostrum
        similique perspiciatis et eaque eum consequuntur quam! Consectetur iste
        error amet harum dicta molestias corporis earum ducimus et eos rerum
        cumque aliquid, est corrupti nostrum fuga porro accusantium magnam nisi
        quidem facere quia sunt libero modi? Voluptatum odio ad architecto sed
        ullam earum corporis voluptatem porro illo nihil nam non iure officiis
        perferendis eveniet quos, quas sunt deleniti quis labore impedit
        accusamus debitis. Architecto corrupti voluptas, nobis nostrum iste
        inventore? Dignissimos, ex provident assumenda molestias fugiat eius.
        Praesentium numquam nulla nam, laboriosam, nisi quae ad deleniti magni
        vel dolore molestias, sint dolores? Quaerat commodi repellat tenetur
        consequatur inventore qui impedit nihil alias velit hic voluptatibus
        eius libero exercitationem molestias atque, animi officiis in soluta
        architecto ullam aspernatur neque mollitia, ad nisi. Adipisci
        consectetur maiores, maxime ad illo tempora velit minus suscipit quo,
        totam aliquid facilis modi atque tempore eaque accusantium numquam
        similique. Odit porro maxime unde nesciunt culpa quibusdam ipsa,
        deleniti animi, mollitia qui doloremque rerum ex fugit. Saepe
        consequuntur quasi hic voluptates fuga recusandae aliquid nisi iure
        dolorem dolores! Deleniti hic atque cupiditate ducimus tenetur velit
        mollitia esse animi, quasi veniam praesentium voluptatem dicta unde
        suscipit repellat magnam consequuntur voluptate expedita aspernatur
        necessitatibus deserunt vero eligendi error at! Culpa molestias sapiente
        velit atque iste asperiores, excepturi officiis unde enim hic error
        eveniet amet? Nostrum.
      </h3>
    </div>
  );
};

export default HomePage;
