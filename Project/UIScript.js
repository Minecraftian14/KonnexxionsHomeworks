// noinspection JSJQueryEfficiency

if ($(window).width() > 800) {

    const rawFile = new XMLHttpRequest();
    rawFile.open("GET", "https://raw.githubusercontent.com/Minecraftian14/KonnexxionsHomeworks/project/Project/UICustomScript.jskey", false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status === 0) {
                let allText = rawFile.responseText.split("\n");

                for (let i = 0; i < allText.length; i++) {
                    if (allText[i].endsWith(":")) {

                        let array = allText[i].split(" > ");
                        let name_ref = array[0]
                        let func_ref = array[1]

                        let property_value_triplets = []

                        while (allText[++i].trim() !== "") {
                            array = allText[i].split(".")
                            let name = array[0].trim()
                            if (!name.startsWith("#"))
                                name = '.' + name;
                            let func = array[1]
                            array = array[2].split("=")
                            let property = array[0].trim()
                            let value = array[1].trim()

                            property_value_triplets.push([name, property, value])
                        }

                        function behaviour() {
                            property_value_triplets.forEach(triplet => {
                                if (triplet[0] === ".this") $(this).css(triplet[1], triplet[2]);
                                else $(triplet[0]).css(triplet[1], triplet[2]);
                            })
                        }

                        if (func_ref === "click:") $(name_ref).click(behaviour);
                        else if (func_ref === "hover:") $(name_ref).hover(behaviour);

                    }
                }
            }
        }
    }
    rawFile.send(null);
}