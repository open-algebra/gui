function setCurrentInput(input) {
    const currentInputDiv = $("#currentInput");
    currentInputDiv.html("");

    if (input) {
        const currentInputDivContentWrapper = $("<div></div>");
        currentInputDivContentWrapper
            .addClass(["bg-primary-subtle", "text-primary-emphasis", "p-2", "shadow rounded-4", "border"])
            .html(input);

        currentInputDiv.append(currentInputDivContentWrapper);
    }

    window.scrollTo(0, document.body.scrollHeight);
}

function addToHistory(query, response) {
    const currentInputElem = $("#currentInput");

    const queryResponseDiv = $("<div></div>").attr("class", "d-flex flex-column gap-1");

    const queryDiv = $("<div></div>")
        .attr("class", "align-self-end bg-primary-subtle text-primary-emphasis p-2 shadow rounded-4 border")
        .html(query);
    queryResponseDiv.append(queryDiv);

    const responseDivContainer = $("<div></div>").attr("class", "d-flex flex-row gap-2");

    const foxSvgContainer = $("<div></div>").attr("class", "bg-white align-self-end p-1 rounded");

    const foxSvg = $("<img>", {"src": "memory:Fox.svg", "style": "height: 2em; width: 2em;"});
    foxSvgContainer.append(foxSvg);
    responseDivContainer.append(foxSvgContainer);

    const responseDiv = $("<div></div>")
        .attr("class", "align-self-start bg-secondary-subtle p-2 shadow rounded-4 border")
        .html(response);
    responseDivContainer.append(responseDiv);

    queryResponseDiv.append(responseDivContainer);
    currentInputElem.before(queryResponseDiv);
}

function setLightTheme()
{
    document.documentElement.setAttribute("data-bs-theme", "light");
}

function setDarkTheme()
{
    document.documentElement.setAttribute("data-bs-theme", "dark");
}

window.setCurrentInput = setCurrentInput
window.addToHistory = addToHistory
window.setLightTheme = setLightTheme
window.setDarkTheme = setDarkTheme