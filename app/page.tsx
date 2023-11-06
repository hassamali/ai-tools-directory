import contentWritingTools from './component/ContentWritingTools';
import Header from './component/Header'
import ImageGeneratingTools from './component/ImageGeneratingTools'
import textBaseTools from './component/TextBaseTools';
import VideoCreatingTools from './component/VideoGeneratingTools';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoRoundedIcon from '@mui/icons-material/OndemandVideoRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';

export default function Page() {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center ">
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" style={{ minHeight: '70vh' }}>
            {/* Cards */}
            <div className="rounded-lg p-4 shadow-lg shadow-cyan-500/50">
              <h2 className="text-xl font-bold mb-2 text-blue-200"><ImageIcon /> Image Generators</h2>
              <div className="flex flex-col">
                {ImageGeneratingTools.map((tool, index) => (
                  <div key={index} className="m-2 target:shadow-lg">
                    <p> 
                      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="hover:font-bold">{tool.name}</a> 
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="shadow-2xl rounded-lg p-4 shadow-lg shadow-cyan-500/50">
              <h2 className="text-xl font-bold mb-2 text-blue-200"><OndemandVideoRoundedIcon /> Video Generators</h2>
              <div className="flex flex-col">
                {VideoCreatingTools.map((tool, index) => (
                  <div key={index} className="m-2 target:shadow-lg">
                    <p> 
                      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="hover:font-bold">{tool.name}</a> 
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="shadow-2xl rounded-lg p-4 shadow-lg shadow-cyan-500/50">
              <h2 className="text-xl font-bold mb-2 text-blue-200"><ChatBubbleRoundedIcon /> AI Chatbots</h2>
              <div className="flex flex-col">
                {textBaseTools.map((tool, index) => (
                  <div key={index} className="m-2 target:shadow-lg">
                    <p> 
                      <a href={tool.url} target="_blank" rel="noopener noreferrer" className="hover:font-bold">{tool.name}</a> 
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="shadow-2xl rounded-lg p-4 shadow-lg shadow-cyan-500/50">
              <h2 className="text-xl font-bold mb-2 text-blue-200"><ArticleRoundedIcon/> AI Content Writers</h2>
              <div className="flex flex-col">
                {contentWritingTools.map((tool, index) => (
                  <div key={index} className="m-2 target:shadow-lg">
                    <p> 
                      <a href={tool.url} target="_blank" rel="noopener noreferrer" className=" hover:font-bold">{tool.name}</a> 
                    </p>
                  </div>
                ))}
              </div>
            </div>
            {/* End of Cards */}
          </div>
        </div>
      </div>
    </>
  );
}
