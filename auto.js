function getElementByXpath(path) {
    return document.evaluate(
        path,
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
    ).singleNodeValue;
}
for (let i = 1; i < 30; i++) {
    // td 인덱스의 2, 3, 4, 5, 6은 각각 5, 4, 3, 2, 1점
    const element = getElementByXpath(`//*[@id="gScore${i}"]/td[2]/input`);

    if (element && element.style.display !== 'none') {
        element.click();
    }
}
