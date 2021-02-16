import { toJS, runInAction } from "mobx";

const createStore = () => ({
  papers: [],
  setPapers(papers) {
    this.papers = papers;
  },
});

export default createStore;
