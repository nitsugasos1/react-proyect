

import "./skills.css"

function Skills(){

    return(
   <>
     <section className="skills">
            <h3>Skills</h3>
            <div className="skills__tabla">
                
                <table>
                    <tr>
                        <td className="td_texto_small">
                            HTML
                        </td>
                        <td>
                            <progress className="progress" max="100" value="90">90%</progress>
                        </td>
                    </tr>
                    <tr>
                        <td className="td_texto_small">
                            CSS
                        </td>
                        <td className="td_texto_large">
                            <progress className="progress" max="100" value="70">70%</progress>
                        </td>
                    </tr>
                </table>
                <table>
                    <tr>
                        <td className="td_texto_small">
                            JS
                        </td>
                        <td className="td_texto_large">
                            <progress className="progress" max="100" value="95">95%</progress>
                        </td>
                    </tr>
                    <tr>
                        <td className="td_texto_small">
                            React
                        </td>
                        <td className="td_texto_large">
                            <progress className="progress" max="100" value="70">70%</progress>
                        </td>
                    </tr>
                </table>
            </div>
        </section>

   </>
        )
          
}
export default Skills