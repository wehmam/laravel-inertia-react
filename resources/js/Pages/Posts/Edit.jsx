import React, { useState } from "react";
import Layout from "../../Layouts/Default";
import { Inertia } from "@inertiajs/inertia";

export default function EditPost({ errors, post }) {
    const [title, setTitle ] = useState(post.title)
    const [content, setContent] = useState(post.content)

    const updatePost = async (e) => {
        e.preventDefault()
        Inertia.put(`/posts/${post.id}`, {
            title: title,
            content: content
        })
    }
    return(
        <Layout>
            <div className="row" style={{ marginTop: '100px' }}>
                <div className="col-12">
                    <div className="card border-0 rounded shadow-sm border-top-success">
                        <div className="card-header">
                            <span className="font-weight-bold">Update Post</span>
                        </div>
                        <div className="card-body">
                            <form onSubmit={updatePost}>

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Title</label>
                                    <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Masukkan Judul Post" />
                                </div>
                                {errors.title && (
                                    <div className="alert alert-danger">
                                        {errors.title}
                                    </div>
                                )}

                                <div className="mb-3">
                                    <label className="form-label fw-bold">Content</label>
                                    <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Masukkan Judul Post" rows={4}></textarea>
                                </div>
                                {errors.content && (
                                    <div className="alert alert-danger">
                                        {errors.content}
                                    </div>
                                )}

                                <div>
                                    <button type="submit" className="btn btn-md btn-success me-2"><i className="fa fa-save"></i> Save</button>
                                    <button type="reset" className="btn btn-md btn-warning"><i className="fa fa-redo"></i> Reset</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
