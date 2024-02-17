class ColorModeContextType implements Iterable<string> {
    private colors = ['red', 'green', 'blue'];

    [Symbol.iterator](): Iterator<string> {
        let index = 0;

        return {
            next: () => {
                if (index < this.colors.length) {
                    return { value: this.colors[index++], done: false };
                } else {
                    return { done: true, value: null };
                }
            }
        };
    }
}