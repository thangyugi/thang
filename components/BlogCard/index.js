import React from 'react'
import Link from 'next/link'
import dayjs from 'dayjs'
import Image from 'next/image'
import Heading from '../WinUI/Typography/Heading'
import Paragraph from '../WinUI/Typography/Paragraph'
import styles from './BlogCard.module.scss'

const BlogCard = ({ data }) => {
    return (
        <Link href={'/tech/' + data.slug} className="www_devblog-card">
            <div className={styles.card}>
                <div className={styles.summary}>
                    <div className={styles.summaryImage}>
                        <Image
                            src={data.cover_image}
                            alt={data.title}
                            fill
                            blurDataURL="data:image/webp;base64,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"
                            placeholder="blur"
                        />
                    </div>

                    <div className={styles.summaryMain}>
                        <div className={styles.date}>
                            <Paragraph level="sm" color="gray">
                                {dayjs(data.publishedAt).format('MMMM D, YYYY')}{' '}
                                &mdash; {data.readingTime}
                            </Paragraph>
                        </div>
                        <div className={styles.title}>
                            <Heading level={5}>{data.title}</Heading>
                        </div>
                        <div className={styles.description}>
                            <Paragraph level="sm" color="gray">
                                {data.excerpt}
                            </Paragraph>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BlogCard
