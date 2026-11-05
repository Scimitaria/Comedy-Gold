use B::Deparse;
my $deparse = B::Deparse->new();

my @funnies = (
    sub { (1 x $_) !~ /^(11+?)\1+$/ && print for 2..100 },
    sub { $_="4a75737420616e6f74686572205065726c206861636b6572";s/../chr hex$&/ge;print }
);

foreach my $dumb (@funnies) {
    (my $code = $deparse->coderef2text($dumb)) =~ s/^\s*\{\s*|\s*\}\s*$//g;
    $code =~ s/\s+$//;
    printf("%-35s => ", $code);
    $dumb->();
    print "\n";
}