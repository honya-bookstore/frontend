'use client';
import { usePathname } from "next/navigation";
import { BreadcrumbSegment, generateBreadcrumbs } from "@/lib/breadcrumb-utils";
import Link from "next/link";
import Icon from "@/components/Icon";

export default function Breadcrumb() {
    const pathname = usePathname();
    const breadcrumbs: BreadcrumbSegment[] = generateBreadcrumbs(pathname);
    breadcrumbs.unshift(
        { name: 'Home', href: '/' }
    )
    return (
        <nav aria-label={'breadcrumb'} className={'flex items-center py-1 text-[16px] font-plus-jakarta-sans gap-2'}>
            {breadcrumbs.map((breadcrumb, index) => (
                <>
                    <Link key={index} href={breadcrumb.href} className={'hover:text-blue-600 transition-all duration-200'}>
                    {breadcrumb.name}
                    </Link>
                    {index !== breadcrumbs.length - 1 && (
                        "/"
                    )}
                </>
            ))}
        </nav>
    )
}