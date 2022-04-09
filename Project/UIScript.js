// noinspection JSJQueryEfficiency

if ($(window).width() > 800) {

    $(".div_band_a").click(function func() {
        $(this).css("width", "91%");
        $(".div_content_place").css("opacity", "0");
        $(".div_band_a").css("opacity", "1");
        $(".div_band_c").css("width", "91%");
        $(".div_band_b").css("width", "91%");
        $(".overlay_div_which_i_sincerely_hate").css("cursor", "pointer");
        $(".overlay_div_which_i_sincerely_hate").css("display", "block");
    });

    $(".div_band_c").click(function () {
        $(this).css("width", "91%");
        $(".div_band_b").css("width", "3%");
        $(".div_band_a").css("width", "3%");
        $(".div_content_place").css("opacity", "0");
        $(".div_band_c").css("opacity", "1");
        $(".overlay_div_which_i_sincerely_hate").css("cursor", "pointer");
        $(".overlay_div_which_i_sincerely_hate").css("display", "block");
    });

    $(".overlay_div_which_i_sincerely_hate").click(function () {
        $(".div_content_place").css("width", "91%");
        $(".div_band_c").css("width", "3%");
        $(".div_content_place").css("opacity", "1");
        $(".div_content_place").css("cursor", "");
        $(".overlay_div_which_i_sincerely_hate").css("display", "none");
    });

    $(".div_band_b").click(function () {
        $(this).css("width", "91%");
        $(".div_content_place").css("opacity", "0");
        $(".div_band_b").css("opacity", "1");
        $(".div_band_a").css("width", "3%");
        $(".div_band_c").css("width", "91%");
        $(".overlay_div_which_i_sincerely_hate").css("cursor", "pointer");
        $(".overlay_div_which_i_sincerely_hate").css("display", "block");
    });

    $(".p_heading span,.horizontal_item p,.fab,.fas").hover(function () {
        $(this).css("cursor", "pointer");
    });

    $(".overlay_div_which_i_sincerely_hate").click(function () {
        $(".div_content_place").css("width", "91%");
        $(".div_band_c").css("width", "3%");
        $(".div_content_place").css("opacity", "1");
        $(".div_content_place").css("cursor", "");
        $(".overlay_div_which_i_sincerely_hate").css("display", "none");
    });

    $("#wavy_underlined_text,.horizontal_item p").click(function () {
        $("#band_a").css("width", "91%");
        $(".div_band_a").css("width", "85%");
        $(".div_content_place").css("opacity", "0");
        $(".div_band_a").css("opacity", "1");
        $(".div_band_c").css("width", "85%");
        $(".div_band_b").css("width", "85%");
        $(".overlay_div_which_i_sincerely_hate").css("cursor", "pointer");
        $(".overlay_div_which_i_sincerely_hate").css("display", "block");
    });

    $(".overlay_div_which_i_sincerely_hate").click(function () {
        $(".div_content_place").css("width", "91%");
        $(".div_band_a").css("width", "3%");
        $(".div_band_c").css("width", "3%");
        $(".div_band_b").css("width", "3%");
        $(".div_content_place").css("opacity", "1");
        $(".div_content_place").css("cursor", "");
        $(".overlay_div_which_i_sincerely_hate").css("display", "none");
    });

    $(".overlay_div_which_i_sincerely_hate").click(function () {
        console.log("1");
        $(".div_content_place").css("width", "91%");
        $(".div_band_b").css("width", "3%");
        $(".div_content_place").css("opacity", "1");
        $(".div_content_place").css("cursor", "");
        $(".div_band_c").css("width", "3%");
        $(".overlay_div_which_i_sincerely_hate").css("display", "none");
    });
}