import React, { useEffect } from 'react'
import './TerminalAnimation.css'
import $ from 'jquery';

const Download = (props) => {

    useEffect(() => {
        appendLine1();

        function appendLine1() {
            $('#line1').append('<span style="color: #50fa7b">→</span> <span style="color: #8be9fd">~\\Desktop</span><span style="color: #ff79c6">></span> <span style="color:#50fa7b"> electric </span> install 7-Zip');
            setTimeout(appendLine2, 50);
        }

        function appendLine2() {
            $('#line2').append('SuperCached [<span style="color: #8be9fd"> 7-Zip </span> ]');
            setTimeout(appendLine3, 700);
        }

        function appendLine3() {
            $('#line3').append('<span style="color: #44475a">████████████████</span> 1.7 / 1.7 MB');
            setTimeout(appendLine4, 150);
        }

        function appendLine4() {
            $('#line4').append('<span style="color: #8be9fd">Installing 7-Zip</span>');
            setTimeout(appendLine5, 300);
        }

        function appendLine5() {
            $('#line5').append('Running Tests For 7-Zip');
            setTimeout(appendLine6, 300);
        }

        function appendLine6() {
            $('#line6').append('[ <span style="color: #50fa7b">OK</span> ] Registry Check');
            setTimeout(appendLine7, 0);
        }

        function appendLine7() {
            $('#line7').append('<span style="color: #ff79c6">Successfully Installed 7-Zip</span>');
            setTimeout(appendLine8, 0);
        }

        function appendLine8() {
            $('#line8').append('<span style="color: #50fa7b">→</span> <span style="color: #8be9fd">~\\Desktop</span><span style="color: #ff79c6">></span>');
            setTimeout(removeLines, 3000);
        }

        function removeLines() {
            $('.lines').empty();
            setTimeout(appendFirstLine, 0)
        }

        function appendFirstLine() {
            $('#line1').append('<span style="color: #50fa7b">→</span> <span style="color: #8be9fd">~\\Desktop</span><span style="color: #ff79c6">></span> <span style="color:#50fa7b"> electric </span> uninstall 7-Zip');
            setTimeout(appendSecondLine, 50);
        }

        function appendSecondLine() {
            $('#line2').append('SuperCached [<span style="color: #8be9fd"> 7-Zip </span> ]');
            setTimeout(appendThirdLine, 9);
        }

        function appendThirdLine() {
            $('#line3').append('<span style="color: #50fa7b">Successfully Retrieved Uninstall Key In 0.0089s</span>');
            setTimeout(appendFourthLine, 9);
        }

        function appendFourthLine() {
            $('#line4').append('<span style="color: #8be9fd">Uninstalling 7-Zip</span>');
            setTimeout(appendFifthLine, 200);
        }

        function appendFifthLine() {
            $('#line5').append('Running Tests For 7-Zip');
            setTimeout(appendSixedLine, 200);
        }

        function appendSixedLine() {
            $('#line6').append('[ <span style="color: #50fa7b">OK</span> ] Registry Check');
            setTimeout(appendSeventhLine, 200);
        }

        function appendSeventhLine() {
            $('#line7').append('<span style="color: #ff79c6">Successfully Uninstalled 7-Zip</span>');
            setTimeout(appendEighthLine, 0);
        }

        function appendEighthLine() {
            $('#line8').append('<span style="color: #50fa7b">→</span> <span style="color: #8be9fd">~\\Desktop</span><span style="color: #ff79c6">></span>');
            setTimeout(removeLinesForUninstall, 3000);
        }

        function removeLinesForUninstall() {
            $('.lines').empty();
            setTimeout(appendLine1, 0)
        }
    }, [])

    return (
        <section class="terminal__section" id="terminal__section">
            <div class="container" id="snippet">
                <div id="header">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <br /><br />
                <div id="code">
                    <p class="lines" id="line1"></p>
                    <p class="lines" id="line2"></p>
                    <p class="lines" id="line3"></p>
                    <p class="lines" id="line4"></p>
                    <p class="lines" id="line5"></p>
                    <p class="lines" id="line6"></p>
                    <p class="lines" id="line7"></p>
                    <p class="lines" id="line8"></p>
                </div>
            </div>
        </section>
    )
}

export default Download
