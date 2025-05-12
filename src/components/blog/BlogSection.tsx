import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';

// Dados de exemplo para os posts do blog
const blogPosts = [
  {
    id: 1,
    title: 'Abertas as inscrições para o Campori 2025',
    excerpt: 'As inscrições para o aguardado Campori de Desbravadores 2025 irão ser abertas em Agosto! Confira como participar e garantir a presença do seu clube.',
    date: '04 de Agosto de 2025',
    image: '/blog/54156423970_5ab6bccf82_o.jpg',
    category: 'Notícias',
  },
  {
    id: 2,
    title: 'Live de Lançamento do Campori Regional',
    excerpt: 'Na nossa live especial, revelamos a temática, os desafios e as grandes novidades do Campori 2025. Uma transmissão cheia de entusiasmo e surpresas para começar a contagem regressiva!',
    date: '10 de  de 2025',
    image: '/blog/54157109146_6030e1ff47_o.jpg',
    category: 'Programação',
  },
  {
    id: 3,
    title: 'Tema do Campori: "Eternamente Desbravador"',
    excerpt: 'O tema escolhido para o Campori revela a identidade que nos acompanha para toda a vida. Ser desbravador vai além do uniforme — é um chamado para viver com fé, coragem e compromisso em todos os momentos. Um convite a nunca deixar de explorar, servir e crescer… eternamente desbravador.',
    date: '3 de Março de 2025',
    image: '/blog/54156356175_347935a03f_o.jpg',
    category: 'Tema',
  },
  {
    id: 4,
    title: 'Preparativos para o grande evento',
    excerpt: 'Os preparativos para o Campori 2025 estão a todo vapor! Confira os bastidores da organização deste que será o maior encontro de desbravadores do ano.',
    date: '22 de Abril de 2025',
    image: '/blog/54157101661_698fc9ec36_o.jpg',
    category: 'Organização',
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-20 bg-campori-dark-blue">
      <div className="container-section">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Blog e Notícias</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Fique por dentro de todas as novidades, informações e atualizações sobre o Campori 2025.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/blog" 
            className="inline-flex items-center text-campori-orange hover:text-white transition-colors font-medium"
          >
            Ver todas as publicações
            <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
}

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

const BlogCard = ({ post, index }: BlogCardProps) => {
  return (
    <motion.article 
      className="bg-campori-dark-teal/30 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-3 flex items-center justify-between">
          <span className="bg-campori-orange/90 text-xs text-white py-1 px-2 rounded-full">
            {post.category}
          </span>
          <div className="flex items-center text-gray-400 text-xs">
            <Calendar size={14} className="mr-1" />
            {post.date}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white mb-3 hover:text-campori-orange transition-colors">
          <a href={`/blog/${post.id}`}>{post.title}</a>
        </h3>
        
        <p className="text-gray-300 text-sm flex-grow mb-4">{post.excerpt}</p>
        
        <a 
          href={`/blog/${post.id}`}
          className="text-campori-orange hover:text-white transition-colors inline-flex items-center text-sm mt-auto"
        >
          Ler mais <ArrowRight size={14} className="ml-1" />
        </a>
      </div>
    </motion.article>
  );
};

export default BlogSection; 