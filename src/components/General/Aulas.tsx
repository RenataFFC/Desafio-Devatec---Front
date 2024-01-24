
const videos = [
  {
    id: 1,
    title: 'Aula 1 - Introdução ao React',
    description: 'Esta aula aborda os conceitos básicos do React.',
    videoUrl: 'https://www.youtube.com/watch?v=123456',
  },
  {
    id: 2,
    title: 'Aula 2 - Componentes e Props',
    description: 'Aprenda sobre componentes e propriedades no React.',
    videoUrl: 'https://www.youtube.com/watch?v=789012',
  },
  {
    id: 2,
    title: 'Aula 2 - Componentes e Props',
    description: 'Aprenda sobre componentes e propriedades no React.',
    videoUrl: 'https://www.youtube.com/watch?v=789012',
  },
  {
    id: 2,
    title: 'Aula 2 - Componentes e Props',
    description: 'Aprenda sobre componentes e propriedades no React.',
    videoUrl: 'https://www.youtube.com/watch?v=789012',
  },
  {
    id: 2,
    title: 'Aula 2 - Componentes e Props',
    description: 'Aprenda sobre componentes e propriedades no React.',
    videoUrl: 'https://www.youtube.com/watch?v=789012',
  },
];

const VideoList = () => {
  return (
    <div className="video-list">
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <iframe
            width="300"
            height="200"
            src={video.videoUrl}
            title={video.title}
            frameBorder="0"
            allowFullScreen
          ></iframe>
          <div className="video-details">
            <h3>{video.title}</h3>
            <p>{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoList;
