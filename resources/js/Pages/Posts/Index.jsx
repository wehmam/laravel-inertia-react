import React from "react";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../Layouts/Default";
import { Inertia } from "@inertiajs/inertia";

export default function PostIndex({ posts, session }) {
    const deletePost = async (id) => {
        const confirmation = window.confirm("Are You Sure want to delete this data?")
        if(confirmation) {
            Inertia.delete(`/posts/${id}`)
        }
    }
    return(
        <Layout>
            <div style={{ marginTop: '100px' }}>

                <Link href="/posts/create" className="btn btn-success btn-md mb-3">Tambah Post</Link>

                {session.success &&
                    (
                        <div className="alert alert-success border-0 shadow-sm rounded-3">
                            {session.success ?? "Alert"}
                        </div>
                    )
                }

                <div className="card border-0 rounded shadow-sm">
                    <div className="card-body">
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">TITLE</th>
                                    <th scope="col">CONTENT</th>
                                    <th scope="col">ACTIONS</th>
                                </tr>
                            </thead>
                            <tbody>
                                { posts.map((post, index) => (
                                    <tr key={ index }>
                                        <td>{ post.title }</td>
                                        <td>{ post.content }</td>
                                        <td className="text-center">
                                            <Link href={`/posts/${post.id}/edit`} className="btn btn-sm btn-primary me-2">Edit</Link>
                                            <button onClick={() => deletePost(post.id)} className="btn btn-sm btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
