"use client";

import { motion } from "framer-motion";

const UNIVERSITIES = [
  { name: "Sanjay Ghodawat University", logo: "https://askusedu.com/wp-content/uploads/2023/04/logo-2.jpg" },
  { name: "MGMU", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxO5BXUbPzN3yxhwlBNANTEwKszc5MblsSxw&s" },
  { name: "MIT-ADT", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYVl6_hFMlDwdNrItMnwgmVriZHvvDdyy1jQ&s" },
  { name: "Vishwakarma University", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjyuxRqlHxXty6y5Ts27atHdYD49RZKy5TkA&s" },
  { name: "Sandip University", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYw6VRMGTIH4oXvzg-lIJnEx_3lVnaFIdJUw&s" },
  { name: "Spicer University", logo: "https://sau.edu.in/images/full-logo.png" },
  { name: "DY Patil International University", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtWEWJRbxuDjPlg8UNVQSPf6s6FAZeqgwhTw&s" },
  { name: "DY Patil Agriculture & Technical University", logo: "https://doak.dypgroup.edu.in/wp-content/uploads/2020/08/eng_logo.png" },
  { name: "Sri Balaji University", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXyt_R0NJ1aBOk5VbeaYR-ME_TtrJmvMj8qg&s" },
  { name: "Ajeenkya DYP University", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMJPhIAJp95zZl3aEKPkbNJRBYAcmXee9dVQ&s" },
  { name: "Vijaybhoomi University", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/Vijaybhoomi_University_Logo.png" },
  { name: "Somaiya Vidyavihar University", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-9F2D5SlK5g78TTtknsQJyDfwbErEsfMTeQ&s" },
  { name: "Symbiosis Skills & Professional University", logo: "https://applyonline.scol.ac.in/images/logo2.png" },
  { name: "D.Y Patil University", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRERV7bzp0Yv5ETEw9Yye2agVgghdx1Wt8HNw&s" },
  { name: "JSPM University", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrWxOda9pctoeXxL5iG66qUJp9KL4OosZc8g&s" },
  { name: "Flame University", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGi4mVbkJ2QlaGR1PAuai1lf-3xk0RcfUKAA&s"},
  { name: "Dr. P.A Inamdar University", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5SEV_MD_6eJULpzGSYD4hdd74VAuNtGli4g&s"},
  { name: "Pimpri Chinchwad University", logo:"https://pinnacle.works/wp-content/uploads/2024/04/pimpri-chinchwad1.png"},
  { name: "NICMAR University", logo: "https://www.iaspaper.net/wp-content/uploads/2023/06/ncmir.webp"},
  { name: "MIT-WPU", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB2TTXfHWwjjm_PSGwaXVGO8euCvQWqGqnhg&s"},
  { name:"Universal Univeristy", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQuhI4xteO6dEvGAUI2ZoeJ6pMz6aPo61TZI6Ef_XgMycBJLjVszl9fUpqR7NKT0zSX4"},
  { name: "MIT Vishwaprayag University", logo:"https://images.shiksha.com/mediadata/images/1691923155phpEYHAXq.jpeg"},
  { name: "DES Pune University", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpbISOPMxPOU_H4qzb15CDGs2zsslMiwkRsOqufUabiZIcLuLxmgXImEAToDZZDpKp8w"},
  { name: "G.H Raisoni Uniersity", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQblqorMp4xepD72tixLQHDBktMKdYMPqlWCw&s"},
  { name: "Sanjivani University", logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK4LiV0X32troKMlZDHyLJ29ykWflPTrQ3vw&s"},
];

export default function UniversityCollaborators() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Esteemed Member Universities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {UNIVERSITIES.map((university, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="aspect-square relative group"
            >
              <div className="absolute inset-0 bg-accent rounded-lg overflow-hidden">
                <img
                  src={university.logo}
                  alt={university.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold">{university.name}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
