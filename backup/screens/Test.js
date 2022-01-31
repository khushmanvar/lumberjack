import {RNFFmpeg} from 'react-native-ffmpeg'

function assertNotNull(condition) {
    if (condition == null) {
        throw "Assertion failed: " + condition + " is null";
    }
}

function assertIsArray(variable) {
    if (!Array.isArray(variable)) {
        throw "Assertion failed";
    }
}

function assertEquals(expected, real) {
    if (expected !== real) {
        throw "Assertion failed: " + real + " != " + expected;
    }
}

function parseSimpleCommand() {
    const argumentArray = RNFFmpeg.parseArguments("-hide_banner   -loop 1  -i file.jpg  -filter_complex  [0:v]setpts=PTS-STARTPTS[video] -map [video] -vsync 2 -async 1  video.mp4");

    assertNotNull(argumentArray);
    assertIsArray(argumentArray);
    assertEquals(14, argumentArray.length);

    assertEquals("-hide_banner", argumentArray[0]);
    assertEquals("-loop", argumentArray[1]);
    assertEquals("1", argumentArray[2]);
    assertEquals("-i", argumentArray[3]);
    assertEquals("file.jpg", argumentArray[4]);
    assertEquals("-filter_complex", argumentArray[5]);
    assertEquals("[0:v]setpts=PTS-STARTPTS[video]", argumentArray[6]);
    assertEquals("-map", argumentArray[7]);
    assertEquals("[video]", argumentArray[8]);
    assertEquals("-vsync", argumentArray[9]);
    assertEquals("2", argumentArray[10]);
    assertEquals("-async", argumentArray[11]);
    assertEquals("1", argumentArray[12]);
    assertEquals("video.mp4", argumentArray[13]);
}

function parseSingleQuotesInCommand() {
    const argumentArray = RNFFmpeg.parseArguments("-loop 1 'file one.jpg'  -filter_complex  '[0:v]setpts=PTS-STARTPTS[video]'  -map  [video]  video.mp4 ");

    assertNotNull(argumentArray);
    assertEquals(8, argumentArray.length);

    assertEquals("-loop", argumentArray[0]);
    assertEquals("1", argumentArray[1]);
    assertEquals("file one.jpg", argumentArray[2]);
    assertEquals("-filter_complex", argumentArray[3]);
    assertEquals("[0:v]setpts=PTS-STARTPTS[video]", argumentArray[4]);
    assertEquals("-map", argumentArray[5]);
    assertEquals("[video]", argumentArray[6]);
    assertEquals("video.mp4", argumentArray[7]);
}

function parseDoubleQuotesInCommand() {
    let argumentArray = RNFFmpeg.parseArguments("-loop  1 \"file one.jpg\"   -filter_complex \"[0:v]setpts=PTS-STARTPTS[video]\"  -map  [video]  video.mp4 ");

    assertNotNull(argumentArray);
    assertEquals(8, argumentArray.length);

    assertEquals("-loop", argumentArray[0]);
    assertEquals("1", argumentArray[1]);
    assertEquals("file one.jpg", argumentArray[2]);
    assertEquals("-filter_complex", argumentArray[3]);
    assertEquals("[0:v]setpts=PTS-STARTPTS[video]", argumentArray[4]);
    assertEquals("-map", argumentArray[5]);
    assertEquals("[video]", argumentArray[6]);
    assertEquals("video.mp4", argumentArray[7]);

    argumentArray = RNFFmpeg.parseArguments(" -i   file:///tmp/input.mp4 -vcodec libx264 -vf \"scale=1024:1024,pad=width=1024:height=1024:x=0:y=0:color=black\"  -acodec copy  -q:v 0  -q:a   0 video.mp4");

    assertNotNull(argumentArray);
    assertEquals(13, argumentArray.length);

    assertEquals("-i", argumentArray[0]);
    assertEquals("file:///tmp/input.mp4", argumentArray[1]);
    assertEquals("-vcodec", argumentArray[2]);
    assertEquals("libx264", argumentArray[3]);
    assertEquals("-vf", argumentArray[4]);
    assertEquals("scale=1024:1024,pad=width=1024:height=1024:x=0:y=0:color=black", argumentArray[5]);
    assertEquals("-acodec", argumentArray[6]);
    assertEquals("copy", argumentArray[7]);
    assertEquals("-q:v", argumentArray[8]);
    assertEquals("0", argumentArray[9]);
    assertEquals("-q:a", argumentArray[10]);
    assertEquals("0", argumentArray[11]);
    assertEquals("video.mp4", argumentArray[12]);
}

function parseDoubleQuotesAndEscapesInCommand() {
    let argumentArray = RNFFmpeg.parseArguments("  -i   file:///tmp/input.mp4 -vf \"subtitles=file:///tmp/subtitles.srt:force_style=\'FontSize=16,PrimaryColour=&HFFFFFF&\'\" -vcodec libx264   -acodec copy  -q:v 0 -q:a  0  video.mp4");

    assertNotNull(argumentArray);
    assertEquals(13, argumentArray.length);

    assertEquals("-i", argumentArray[0]);
    assertEquals("file:///tmp/input.mp4", argumentArray[1]);
    assertEquals("-vf", argumentArray[2]);
    assertEquals("subtitles=file:///tmp/subtitles.srt:force_style='FontSize=16,PrimaryColour=&HFFFFFF&'", argumentArray[3]);
    assertEquals("-vcodec", argumentArray[4]);
    assertEquals("libx264", argumentArray[5]);
    assertEquals("-acodec", argumentArray[6]);
    assertEquals("copy", argumentArray[7]);
    assertEquals("-q:v", argumentArray[8]);
    assertEquals("0", argumentArray[9]);
    assertEquals("-q:a", argumentArray[10]);
    assertEquals("0", argumentArray[11]);
    assertEquals("video.mp4", argumentArray[12]);

    argumentArray = RNFFmpeg.parseArguments("  -i   file:///tmp/input.mp4 -vf \"subtitles=file:///tmp/subtitles.srt:force_style=\\\"FontSize=16,PrimaryColour=&HFFFFFF&\\\"\" -vcodec libx264   -acodec copy  -q:v 0 -q:a  0  video.mp4");

    assertNotNull(argumentArray);
    assertEquals(13, argumentArray.length);

    assertEquals("-i", argumentArray[0]);
    assertEquals("file:///tmp/input.mp4", argumentArray[1]);
    assertEquals("-vf", argumentArray[2]);
    assertEquals("subtitles=file:///tmp/subtitles.srt:force_style=\\\"FontSize=16,PrimaryColour=&HFFFFFF&\\\"", argumentArray[3]);
    assertEquals("-vcodec", argumentArray[4]);
    assertEquals("libx264", argumentArray[5]);
    assertEquals("-acodec", argumentArray[6]);
    assertEquals("copy", argumentArray[7]);
    assertEquals("-q:v", argumentArray[8]);
    assertEquals("0", argumentArray[9]);
    assertEquals("-q:a", argumentArray[10]);
    assertEquals("0", argumentArray[11]);
    assertEquals("video.mp4", argumentArray[12]);
}

class TestClass {

    testParseArguments() {
        parseSimpleCommand();
        parseSingleQuotesInCommand();
        parseDoubleQuotesInCommand();
        parseDoubleQuotesAndEscapesInCommand();
    }

}

export const TestUtil = new TestClass();