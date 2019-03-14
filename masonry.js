$(() {
    let wrapper=$('.card-columns'),
        items=$('.card'),
        cols = Number(wrapper.css("column-count")),
        out = [],
        col = 0;
    while(col < cols) {
        for (let i = 0; i < items.length; i += cols) {
            let val = items[i + col];
            if (val !== undefined)
                out.push(val);
        }
        col++;
    }
    wrapper.html(out);
});
