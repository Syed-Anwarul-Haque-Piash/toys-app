import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className="card   text-primary-content mt-8 mb-24 ms-4 ">
            <h1 className='text-center text-6xl text-sky-900 mb-4'>My Blogs</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 '>
                <div className="card-body bg-sky-900">
                    <h2 className="card-title">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h2>
                    <p>An access token is a credential that is issued by an authentication server after a user successfully authenticates and authorizes an application.
                        A refresh token is a long-lived credential that is also issued by the authentication server alongside the access token.
                        They should use in HTTP-only Cookie
                    </p>

                </div>
                <div className="card-body bg-sky-900 rounded">
                    <h2 className="card-title">Compare SQL and NoSQL databases?</h2>
                    <p> SQL means structured Quert language.SQL databases are based on a structured schema that defines the tables, columns, and relationships between them.
                        NoSQL databases have a flexible schema, allowing for dynamic and unstructured data. They can handle semi-structured and polymorphic data models more effectively.
                    </p>

                </div>
                <div className="card-body bg-sky-900 rounded">
                    <h2 className="card-title">What is express js? What is Nest JS ?</h2>
                    <p> Express.js is a minimalistic and flexible web application framework for Node.js. It provides a simple and unopinionated approach to building web applications and APIs.
                        NestJS is a progressive, opinionated framework for building scalable and maintainable server-side applications. It is built with TypeScript.
                    </p>

                </div>
                <div className="card-body bg-sky-900 rounded">
                    <h2 className="card-title">What is MongoDB aggregate and how does it work?</h2>
                    <p>The aggregate function is used to perform advanced data processing operations on the data stored in a collection. It allows you to apply a series of operations, known as the aggregation pipeline, to transform, filter, group, and analyze the data.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Blog;