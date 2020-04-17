import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import SearchField from '../components/SearchField';
import SearchResults from '../components/SearchResults';
import SearchPageNavigator from '../components/SearchPageNavigator';

const ProjectSearch = ({data, location}) => {
  const [results, setResults] = useState([]);
  const searchQuery = new URLSearchParams(location.search).get('keywords') || '*';
  const searchPage = parseInt(new URLSearchParams(location.search).get('page') || 1);
  const resultsPerPage = 8;

  useEffect(() => {
    if (searchQuery && window.__LUNR__) {
      window.__LUNR__.__loaded.then(lunr => {
        const refs = lunr.en.index.search(searchQuery);
        const posts = refs.map(({ ref }) => lunr.en.store[ref]);
        const results = posts.filter( (post) => post.project_id !== undefined);
        setResults(results);
      });
    }
  }, [searchQuery]);

  const pages = Math.floor((results.length - 1) / resultsPerPage) + 1;
  const paginatedResults = results.slice((searchPage - 1) * resultsPerPage, (searchPage * resultsPerPage));

  return (
    <Layout>
      <section className="section" >
        <div className="container" >
          <div className="content" >
            <SearchField query={searchQuery} />
            <hr className="horizontal-rule" />
            {pages !== 0 ? (<SearchPageNavigator pages={pages} currPage={searchPage} query={searchQuery}/>) : (<div />)}
            <SearchResults query={searchQuery} results={paginatedResults} data={data} isProject={true}/>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectSearch