import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blogImg1, blogImg2, blogImg3, blogImg4, blogImg5 } from './import';

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, <br /> We are blogging about it.
        </h1>
      </div>

      <div className='gpt3__blog-articles'>
        <div className="gpt3__blog-articles-A">
          <Article image={blogImg1} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>

        <div className="gpt3__blog-articles-B">
          <Article image={blogImg2} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article image={blogImg3} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article image={blogImg4} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
          <Article image={blogImg5} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' />
        </div>
      </div>
    </div>
  )
}

export default Blog