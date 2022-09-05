import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BlogHeader } from './BlogStyles/BlogHeader.styled';
import { BlogHero } from './BlogStyles/BlogHero.styled';
import { StyledBlogs } from './BlogStyles/Blogs.styled';
import Rec1 from './images/img1.png';
import { BlogCard } from './BlogStyles/Card.styled';
import Rec2 from './images/img2.png';
import Rec3 from './images/img3.png';
import Rec4 from './images/img4.png';
import Rec5 from './images/img5.png';
import Rec6 from './images/img6.png';
import Rec7 from './images/img7.png';
import Small1 from './images/smallpic1.png';
import Small2 from './images/smallpic2.png';
import Small3 from './images/smallpic3.png';
import { StyledContainer } from './BlogStyles/Container.styled';
import { FaSearch } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';

const Theme = {
  mobile: '968px',
  smallMobile: '555px',
  smallScreen: '400px',
};

const Blog = () => {
  return (
    <>
      <Header />
      <ThemeProvider theme={Theme}>
        <Container className='my-0'>
          <StyledContainer>
            <div>
              <BlogHeader>
                <div className='blogheader-top'>
                  <h1>Blog</h1>
                  <div className='search'>
                    <FaSearch className='iconSearch' />
                    <input type='text' placeholder='Search' />
                  </div>
                </div>
                <div className='blogheader-bottom'>
                  <nav>
                    <ul>
                      <li className='active'>All</li>
                      <li>Technology</li>
                      <li>Cryptocurrency</li>
                      <li>Business</li>
                      <li>Trade</li>
                    </ul>
                  </nav>
                </div>
              </BlogHeader>
              <BlogHero>
                <div className='hero-card-info'>
                  <div className='body'>
                    <small className='smallTitle'>Cryptocurrency</small>
                    <h3>Follow the trend with the new age Technology</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Dolorem pariatur eveniet iste a impedit officia quasi,
                      voluptates ea, totam nulla nobis, dicta repellat
                      voluptatem harum aliquid eligendi fuga sunt facilis Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Dolorem
                      pariatur eveniet iste a impedit
                    </p>
                  </div>
                  <div className='footer flex'>
                    <div className='flex1'>
                      <div className='im'>
                        <img className='ft-img' src={Small2} alt='blog pics' />
                      </div>
                      <div>
                        <small className='blogger'>Esther Howard</small>
                        <small className='blogger'>Jun 15, 2022</small>
                      </div>
                    </div>
                    <div>
                      <a className='link' href='#'>
                        Read Article
                      </a>
                    </div>
                  </div>
                </div>
                <div>
                  <img className='cadImg' src={Rec1} alt='blog pic' />
                </div>
              </BlogHero>
              <StyledBlogs>
                <BlogCard>
                  <div className='cadImgBox'>
                    <img className='cadImg' src={Rec2} alt='blog pic' />
                  </div>
                  <div className='body'>
                    <small className='smallTitle'>Technology</small>
                    <h3>Follow the trend with the new age Technology</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti, ab minima numquam eveniet, sequi molestias
                      nisi...
                    </p>
                  </div>
                  <div className='footer flex'>
                    <div className='flex1'>
                      <div className='im'>
                        <img className='ft-img' src={Small3} alt='blog pics' />
                      </div>
                      <div>
                        <small className='blogger'>Esther Howard</small>
                        <small className='blogger'>Jun 15, 2022</small>
                      </div>
                    </div>
                    <div>
                      <a className='link' href='#'>
                        Read Article
                      </a>
                    </div>
                  </div>
                </BlogCard>
                <BlogCard>
                  <div className='cadImgBox'>
                    <img className='cadImg' src={Rec3} alt='blog pic' />
                  </div>
                  <div className='body'>
                    <small className='smallTitle'>Technology</small>
                    <h3>Lorem ipsum dolor sit amet consectetur..</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti, ab minima numquam eveniet, sequi molestias
                      nisi...
                    </p>
                  </div>
                  <div className='footer flex'>
                    <div className='flex1'>
                      <div className='im'>
                        <img className='ft-img' src={Small1} alt='blog pics' />
                      </div>
                      <div>
                        <small className='blogger'>Esther Howard</small>
                        <small className='blogger'>Jun 15, 2022</small>
                      </div>
                    </div>
                    <div>
                      <a className='link' href='#'>
                        Read Article
                      </a>
                    </div>
                  </div>
                </BlogCard>
                <BlogCard>
                  <div className='cadImgBox'>
                    <img className='cadImg' src={Rec4} alt='blog pic' />
                  </div>
                  <div className='body'>
                    <small className='smallTitle'>Technology</small>
                    <h3>Lorem ipsum dolor sit amet consectetur..</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti, ab minima numquam eveniet, sequi molestias
                      nisi...
                    </p>
                  </div>
                  <div className='footer flex'>
                    <div className='flex1'>
                      <div className='im'>
                        <img className='ft-img' src={Small1} alt='blog pics' />
                      </div>
                      <div>
                        <small className='blogger'>Esther Howard</small>
                        <small className='blogger'>Jun 15, 2022</small>
                      </div>
                    </div>
                    <div className='lat'>
                      <a className='link la' href='#'>
                        Read Article
                      </a>
                    </div>
                  </div>
                </BlogCard>
                <BlogCard>
                  <div className='cadImgBox'>
                    <img className='cadImg' src={Rec5} alt='blog pic' />
                  </div>
                  <div className='body'>
                    <small className='smallTitle'>Technology</small>
                    <h3>Follow the trend with the new age Technology</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti, ab minima numquam eveniet, sequi molestias
                      nisi...
                    </p>
                  </div>
                  <div className='footer flex'>
                    <div className='flex1'>
                      <div className='im'>
                        <img className='ft-img' src={Small1} alt='blog pics' />
                      </div>
                      <div>
                        <small className='blogger'>Esther Howard</small>
                        <small className='blogger'>Jun 15, 2022</small>
                      </div>
                    </div>
                    <div>
                      <a className='link' href='#'>
                        Read Article
                      </a>
                    </div>
                  </div>
                </BlogCard>
                <BlogCard>
                  <div className='cadImgBox'>
                    <img className='cadImg' src={Rec6} alt='blog pic' />
                  </div>
                  <div className='body'>
                    <small className='smallTitle'>Technology</small>
                    <h3>Lorem ipsum dolor sit amet consectetur..</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti, ab minima numquam eveniet, sequi molestias
                      nisi...
                    </p>
                  </div>
                  <div className='footer flex'>
                    <div className='flex1'>
                      <div className='im'>
                        <img className='ft-img' src={Small1} alt='blog pics' />
                      </div>
                      <div>
                        <small className='blogger'>Esther Howard</small>
                        <small className='blogger'>Jun 15, 2022</small>
                      </div>
                    </div>
                    <div>
                      <a className='link' href='#'>
                        Read Article
                      </a>
                    </div>
                  </div>
                </BlogCard>
                <BlogCard>
                  <div className='cadImgBox'>
                    <img className='cadImg' src={Rec7} alt='blog pic' />
                  </div>
                  <div className='body'>
                    <small className='smallTitle'>Technology</small>
                    <h3>Lorem ipsum dolor sit amet consectetur..</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti, ab minima numquam eveniet, sequi molestias
                      nisi...
                    </p>
                  </div>
                  <div className='footer flex'>
                    <div className='flex1'>
                      <div className='im'>
                        <img className='ft-img' src={Small1} alt='blog pics' />
                      </div>
                      <div>
                        <small className='blogger'>Esther Howard</small>
                        <small className='blogger'>Jun 15, 2022</small>
                      </div>
                    </div>
                    <div>
                      <a className='link' href='#'>
                        Read Article
                      </a>
                    </div>
                  </div>
                </BlogCard>
              </StyledBlogs>
            </div>
          </StyledContainer>
        </Container>
      </ThemeProvider>
    </>
  );
};

export default Blog;
