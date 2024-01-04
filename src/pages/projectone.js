import React from "react";
import Taskbar from "../components/taskbar";
import Footer from "../components/footer";

export default function ProjectOne(){
    return(
        <div>
            <Taskbar/>
            <div className="bg-[#E7D3AB] text-[#333335] min-h-screen font-satoshi italic flex justify-center items-center">
                <div id="scroll" className="w-2/3 md:w-1/2 flex flex-col py-16">
                    <div id="project-title" className="text-7xl font-medium flex flex-col gap-3">
                        <h1>Project 1: Weathering</h1>
                        <h2 className="w-full border-b border-[#333335] bg-slate-300"></h2>
                        <h3 className="not-italic text-sm mb-4">Published 12:15 AM January 4th, 2024</h3>
                    </div>

                    <div id="image">
                        <img src="https://i.insider.com/602ee9d81a89f20019a377c6?width=1136&format=jpeg" alt="just a placeholder lol" className="shadow-md"></img>
                        <div className="not-italic text-xs">you just got rick roll'ed</div>
                    </div>

                    <div id="project-info" className="text-3xl not-italic font-extrabold flex flex-col gap-3 mb-4 mt-10">
                        <div id="summary" className="pb-4">
                            <h1 className="pb-4">Summary</h1>
                            <h2 className="text-lg">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vehicula, orci id cursus facilisis, odio mauris pulvinar urna, at elementum metus diam sed eros. Nulla sed elit ut libero sagittis porttitor. Quisque ultrices mi nec consequat mollis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam erat volutpat.
                            </h2>
                        </div>
                        <div id="Objective" className="pb-4">
                            <h1 className="pb-4">Objective</h1>
                            <h2 className="text-lg">
                                Morbi semper scelerisque finibus. Aenean ultrices vel justo in mollis. Nulla ipsum tellus, lacinia id libero a, elementum viverra mauris. Quisque rutrum mauris convallis enim commodo convallis. Curabitur dictum risus dapibus neque semper aliquam. Aliquam lectus velit, eleifend et turpis sed, tristique convallis risus. Nam quis leo tristique, feugiat arcu id, laoreet augue. Vestibulum finibus varius leo vitae condimentum. Cras commodo gravida tellus, ac dapibus mauris venenatis id. Pellentesque vehicula metus sit amet molestie varius. Maecenas id urna id mauris viverra lobortis.
                            </h2>
                        </div>
                        <div id="tech-stack" className="pb-4">
                            <h1 className="pb-4">Technologies Used</h1>
                            <h2 className="text-lg">
                                Aliquam id nunc ut erat eleifend dignissim a ut diam. Etiam non nibh eu augue iaculis mattis. Pellentesque commodo eget nibh vitae tempus. Fusce sollicitudin metus quis odio gravida hendrerit. Ut accumsan mi ac sem ullamcorper scelerisque. Maecenas sagittis lectus eget dictum tincidunt. Integer pharetra ligula vel libero pharetra elementum.
                            </h2>
                        </div>
                    </div>

                    <h1 className="w-full border-b border-[#333335] bg-slate-300"></h1>
                </div>
            </div>
            <Footer/>
        </div>
    )
}